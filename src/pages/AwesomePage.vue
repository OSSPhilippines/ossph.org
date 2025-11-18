<template lang="pug">
generic-panel(
  :panel-classes="['grey-panel', 'bg-transparent']"
  padding-top="0px"
  padding-top-mobile="0px"
  hide-hr
)
  div.row.items-center.justify-center
    div.col-xs-12.col-md-10.text-center
      h1(:class="{ 'text-h2': !isMobile, 'text-h4': isMobile }").ossph-font Awesome #[span.ossph-text-gradient-main Pinoy-Made] Projects 🇵🇭
      p(data-aos="fade-down").ossph-text-paragraph A collection of open source projects made by Filipino developers

      // Top CTAs
      div.row.wrap.justify-center.q-mt-lg.q-mb-xl
        div.col-xs-12.text-center.q-gutter-sm
          q-btn(
            label="Submit Your Project"
            :size="isMobile \
              ? 'md' \
              : 'lg'"
            color="primary"
            icon="add"
            href="https://github.com/OSSPhilippines/awesome-pinoy-made"
            target="_blank"
            no-caps
            unelevated
          )
          q-btn(
            label="View on GitHub"
            :size="isMobile \
              ? 'md' \
              : 'lg'"
            color="black"
            icon="fab fa-github"
            href="https://github.com/OSSPhilippines/awesome-pinoy-made"
            target="_blank"
            no-caps
            outline
          )

      // Filters section
      section(aria-label="Search and filter projects")
        div.row.justify-center.q-mb-lg.q-gutter-md
          div.col-xs-12.col-md-3
            q-input(
              v-model="searchQuery"
              label="Search projects"
              outlined
              dense
              clearable
              aria-label="Search projects by name, description, or technology"
            )
              template(v-slot:prepend)
                q-icon(name="search")
          div.col-xs-12.col-md-2
            q-select(
              v-model="selectedCategory"
              :options="filteredCategoryOptions"
              label="Filter by Category"
              outlined
              dense
              emit-value
              map-options
              clearable
              use-input
              hide-selected
              fill-input
              input-debounce="0"
              @filter="filterCategories"
              aria-label="Filter projects by category"
            )
              template(v-slot:no-option)
                q-item
                  q-item-section.text-grey
                    | No results
          div.col-xs-12.col-md-2
            q-select(
              v-model="selectedAuthor"
              :options="filteredAuthorOptions"
              label="Filter by Author"
              outlined
              dense
              emit-value
              map-options
              clearable
              use-input
              hide-selected
              fill-input
              input-debounce="0"
              @filter="filterAuthors"
              aria-label="Filter projects by author"
            )
              template(v-slot:no-option)
                q-item
                  q-item-section.text-grey
                    | No results
          div.col-xs-12.col-md-3
            q-select(
              v-model="selectedTags"
              :options="filteredTagOptions"
              label="Filter by Tags"
              outlined
              dense
              multiple
              use-chips
              clearable
              use-input
              hide-selected
              input-debounce="0"
              @filter="filterTags"
              aria-label="Filter projects by tags"
            )
              template(v-slot:no-option)
                q-item
                  q-item-section.text-grey
                    | No results

      // Loading state
      div(v-if="isLoading").row.justify-center
        q-spinner(color="primary" size="50px")
        p.q-mt-md Loading awesome projects...

      // Error state
      div(v-if="error").row.justify-center
        q-banner(inline-actions class="text-white bg-red").q-mb-lg
          | Error loading projects: {{ error }}
          template(v-slot:action)
            q-btn(flat color="white" label="Retry" @click="fetchProjects")

      // Projects grid
      main(v-if="!isLoading && !error && filteredProjects.length > 0" aria-label="Projects listing")
        div.projects-grid
          article(v-for="project in filteredProjects" :key="project.id" data-aos="fade-up")
            q-card.shadow-2.project-card
              // Banner image or placeholder
              q-img(
                :src="project.bannerUrl || 'https://placehold.co/600x338/e8e8e8/999?text=' + encodeURIComponent(project.name || 'Project')"
                :ratio="16/9"
                spinner-color="primary"
              ).project-banner

              q-card-section.q-pb-sm
                div.project-header
                  q-img(
                    v-if="project.iconUrl"
                    :src="project.iconUrl"
                    spinner-color="primary"
                    width="48px"
                    height="48px"
                  ).project-icon
                  q-avatar(
                    v-else
                    color="primary"
                    text-color="white"
                    size="48px"
                  )
                    | {{ project.name ? project.name.charAt(0).toUpperCase() : '?' }}
                  div.project-title
                    h6.text-h6.q-ma-none.text-weight-bold {{ project.name }}
                    q-badge(
                      v-if="project.category"
                      :label="project.category"
                      color="primary"
                      outline
                    ).q-mt-xs

              q-card-section.q-pt-none.q-pb-sm
                p.project-description {{ project.description }}

                // Author info
                div(v-if="project.author").author-section.q-mt-sm
                  span.text-caption.text-grey-7 by&nbsp;
                  a(
                    v-if="project.author.github"
                    :href="project.author.github"
                    target="_blank"
                  ).author-link {{ project.author.name }}
                  span(v-else).author-name {{ project.author.name }}

                // Technologies
                div(v-if="project.technologies && project.technologies.length").q-mt-sm.q-mb-sm
                  q-chip(
                    v-for="tech in project.technologies.slice(0, 4)"
                    :key="tech"
                    size="sm"
                    color="grey-2"
                    text-color="grey-8"
                    dense
                  ).q-mr-xs {{ tech }}
                  q-chip(
                    v-if="project.technologies.length > 4"
                    size="sm"
                    color="grey-3"
                    text-color="grey-8"
                    dense
                  ) +{{ project.technologies.length - 4 }}

              q-separator

              // Links section
              q-card-actions.justify-between.q-px-md
                div.row.no-wrap.q-gutter-xs
                  q-btn(
                    v-if="project.links && project.links.github"
                    icon="fab fa-github"
                    :href="project.links.github"
                    target="_blank"
                    flat
                    round
                    dense
                    color="black"
                    size="sm"
                  )
                  q-btn(
                    v-if="project.links && project.links.website"
                    icon="language"
                    :href="project.links.website"
                    target="_blank"
                    flat
                    round
                    dense
                    color="primary"
                    size="sm"
                  )
                  q-btn(
                    v-if="project.links && project.links.npm"
                    icon="fab fa-npm"
                    :href="project.links.npm"
                    target="_blank"
                    flat
                    round
                    dense
                    color="red"
                    size="sm"
                  )
                  q-btn(
                    v-if="project.links && project.links.documentation"
                    icon="description"
                    :href="project.links.documentation"
                    target="_blank"
                    flat
                    round
                    dense
                    color="blue"
                    size="sm"
                  )
                q-chip(
                  v-if="project.stars"
                  icon="star"
                  color="amber"
                  text-color="black"
                  dense
                ).text-weight-medium {{ formatStars(project.stars) }}

      // No results
      div(v-else-if="!isLoading && !error && filteredProjects.length === 0").text-center.q-pa-lg
        q-icon(name="search_off" size="60px" color="grey-5")
        p.text-h6.text-grey-6.q-mt-md No projects found matching your criteria
        q-btn(
          label="Clear filters"
          color="primary"
          outline
          @click="clearFilters"
        ).q-mt-sm

      // Call to action
      div.row.wrap.justify-center.q-mt-xl
        div.col-xs-12.text-center.q-gutter-sm
          q-btn(
            label="Submit Your Project"
            size="lg"
            color="primary"
            icon="add"
            href="https://github.com/OSSPhilippines/awesome-pinoy-made"
            target="_blank"
            no-caps
            unelevated
          )
          q-btn(
            label="View on GitHub"
            size="lg"
            color="black"
            icon="fab fa-github"
            href="https://github.com/OSSPhilippines/awesome-pinoy-made"
            target="_blank"
            no-caps
            outline
          )
</template>

<script>
import { ref, computed, onMounted, watch } from 'vue';
import { useBuildMeta } from '@/composables/meta';
import { useMeta, useQuasar } from 'quasar';
import GenericPanel from '@/components/commons/GenericPanel.vue';
import axios from 'axios';

export default {
  components: {
    GenericPanel,
  },
  setup () {
    useMeta(useBuildMeta({
      page: 'Awesome Pinoy-Made Projects - Open Source Software Philippines',
      description: 'Discover amazing open source projects created by Filipino developers. Browse libraries, tools, frameworks, and applications made by the Philippine tech community.',
      keywords: 'Filipino developers, Philippine open source, Pinoy-made software, Filipino programmers, Philippine tech community, open source projects Philippines, Filipino GitHub projects, Philippine software developers',
      og: {
        title: 'Awesome Pinoy-Made Open Source Projects | OSSPH',
        description: 'Explore a curated collection of open source projects built by talented Filipino developers. Find libraries, tools, frameworks, and applications from the Philippine tech community.',
        image: 'https://ossph.org/ossph-preview.png',
        url: 'https://ossph.org/awesome',
      },
      twitter: {
        card: 'summary_large_image',
        title: 'Awesome Pinoy-Made Open Source Projects',
        description: 'Discover open source projects by Filipino developers',
        image: 'https://ossph.org/ossph-preview.png',
      },
    }));

    const $q = useQuasar();
    const isMobile = computed(() => $q.screen.lt.md);

    // Data and state
    const projects = ref([]);
    const isLoading = ref(false);
    const error = ref(null);
    const searchQuery = ref('');
    const selectedCategory = ref(null);
    const selectedAuthor = ref(null);
    const selectedTags = ref([]);

    // Filtered options for searchable selects
    const filteredCategoryOptions = ref([]);
    const filteredAuthorOptions = ref([]);
    const filteredTagOptions = ref([]);

    // Fetch projects from GitHub
    const fetchProjects = async () => {
      isLoading.value = true;
      error.value = null;

      try {
        const response = await axios.get('https://raw.githubusercontent.com/OSSPhilippines/awesome-pinoy-made/refs/heads/main/data.json');
        // Check if response.data is an array or has a projects property
        if (Array.isArray(response.data)) {
          projects.value = response.data;
        } else if (response.data && Array.isArray(response.data.projects)) {
          projects.value = response.data.projects;
        } else if (response.data && typeof response.data === 'object') {
          // If it's an object, try to extract values as array
          projects.value = Object.values(response.data);
        } else {
          projects.value = [];
        }
      } catch (err) {
        error.value = err.message || 'Failed to load projects';
        projects.value = [];
      } finally {
        isLoading.value = false;
      }
    };

    // Computed options for filters
    const categoryOptions = computed(() => {
      const categories = [...new Set(projects.value
        .filter(p => p.category)
        .map(p => p.category))];
      return categories.map(cat => ({
        label: cat.charAt(0).toUpperCase() + cat.slice(1),
        value: cat,
      }));
    });

    const authorOptions = computed(() => {
      const authors = [...new Set(projects.value
        .filter(p => p.author && p.author.name)
        .map(p => p.author.name))];
      return authors.sort().map(author => ({
        label: author,
        value: author,
      }));
    });

    const tagOptions = computed(() => {
      const tags = new Set();
      projects.value.forEach(project => {
        if (project.tags && Array.isArray(project.tags)) {
          project.tags.forEach(tag => tags.add(tag));
        }
      });
      return Array.from(tags).sort();
    });

    // Filter projects based on search and selections
    const filteredProjects = computed(() => {
      let filtered = [...projects.value];

      // Search filter
      if (searchQuery.value) {
        const query = searchQuery.value.toLowerCase();
        filtered = filtered.filter(project => {
          return (
            project.name?.toLowerCase().includes(query) ||
            project.description?.toLowerCase().includes(query) ||
            project.author?.name?.toLowerCase().includes(query) ||
            project.technologies?.some(tech => tech.toLowerCase().includes(query)) ||
            project.tags?.some(tag => tag.toLowerCase().includes(query))
          );
        });
      }

      // Category filter
      if (selectedCategory.value) {
        filtered = filtered.filter(project => project.category === selectedCategory.value);
      }

      // Author filter
      if (selectedAuthor.value) {
        filtered = filtered.filter(project =>
          project.author && project.author.name === selectedAuthor.value,
        );
      }

      // Tags filter
      if (selectedTags.value && selectedTags.value.length > 0) {
        filtered = filtered.filter(project => {
          if (!project.tags || !Array.isArray(project.tags)) return false;
          return selectedTags.value.every(tag => project.tags.includes(tag));
        });
      }

      // Return filtered projects in their original order (no sorting)
      return filtered;
    });

    // Format stars count
    const formatStars = (stars) => {
      if (!stars) return '0';
      if (stars >= 1000) {
        return (stars / 1000).toFixed(1) + 'k';
      }
      return stars.toString();
    };

    // Clear all filters
    const clearFilters = () => {
      searchQuery.value = '';
      selectedCategory.value = null;
      selectedAuthor.value = null;
      selectedTags.value = [];
    };

    // Filter methods for searchable selects
    const filterCategories = (val, update) => {
      update(() => {
        if (val === '') {
          filteredCategoryOptions.value = categoryOptions.value;
        } else {
          const needle = val.toLowerCase();
          filteredCategoryOptions.value = categoryOptions.value.filter(
            opt => opt.label.toLowerCase().indexOf(needle) > -1,
          );
        }
      });
    };

    const filterAuthors = (val, update) => {
      update(() => {
        if (val === '') {
          filteredAuthorOptions.value = authorOptions.value;
        } else {
          const needle = val.toLowerCase();
          filteredAuthorOptions.value = authorOptions.value.filter(
            opt => opt.label.toLowerCase().indexOf(needle) > -1,
          );
        }
      });
    };

    const filterTags = (val, update) => {
      update(() => {
        if (val === '') {
          filteredTagOptions.value = tagOptions.value;
        } else {
          const needle = val.toLowerCase();
          filteredTagOptions.value = tagOptions.value.filter(
            tag => tag.toLowerCase().indexOf(needle) > -1,
          );
        }
      });
    };

    // Watch for changes in computed options and update filtered options
    watch(categoryOptions, (newOptions) => {
      filteredCategoryOptions.value = newOptions;
    }, { immediate: true });

    watch(authorOptions, (newOptions) => {
      filteredAuthorOptions.value = newOptions;
    }, { immediate: true });

    watch(tagOptions, (newOptions) => {
      filteredTagOptions.value = newOptions;
    }, { immediate: true });

    // Add structured data for SEO
    const addStructuredData = () => {
      if (typeof window !== 'undefined' && projects.value.length > 0) {
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.text = JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          name: 'Awesome Pinoy-Made Open Source Projects',
          description: 'A curated collection of open source projects created by Filipino developers',
          url: 'https://ossph.org/awesome',
          publisher: {
            '@type': 'Organization',
            name: 'Open Source Software Philippines',
            url: 'https://ossph.org',
          },
          hasPart: projects.value.slice(0, 10).map(project => ({
            '@type': 'SoftwareSourceCode',
            name: project.name,
            description: project.description,
            author: project.author
              ? {
                  '@type': 'Person',
                  name: project.author.name,
                  url: project.author.github,
                }
              : undefined,
            codeRepository: project.links?.github,
            programmingLanguage: project.technologies?.join(', '),
            keywords: project.tags?.join(', '),
          })),
        });
        document.head.appendChild(script);
      }
    };

    // Load projects on mount (client side only to avoid SSR issues)
    onMounted(() => {
      fetchProjects().then(() => {
        addStructuredData();
      });
    });

    return {
      isMobile,
      projects,
      isLoading,
      error,
      searchQuery,
      selectedCategory,
      selectedAuthor,
      selectedTags,
      categoryOptions,
      authorOptions,
      tagOptions,
      filteredCategoryOptions,
      filteredAuthorOptions,
      filteredTagOptions,
      filteredProjects,
      fetchProjects,
      formatStars,
      clearFilters,
      filterCategories,
      filterAuthors,
      filterTags,
    };
  },
};
</script>

<style scoped>
.grey-panel {
  background-color: #fefefe;
}

.projects-grid {
  display: grid;
  gap: 1.5rem;
  margin-top: 2rem;
}

@media (min-width: 600px) {
  .projects-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .projects-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.project-card {
  height: 100%;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s, box-shadow 0.3s;
  overflow: hidden;
  border-radius: 12px;
}

.project-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
}

.project-banner {
  width: 100%;
  max-height: 180px;
  object-fit: cover;
}

.project-header {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  margin-bottom: 0.5rem;
}

.project-icon {
  flex-shrink: 0;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.project-title {
  flex: 1;
  text-align: left;
  min-width: 0;
}

.project-title h6 {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
}

.project-description {
  text-align: left;
  color: #555;
  line-height: 1.5;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
  min-height: 4.2em;
  font-size: 0.9rem;
}

.author-section {
  text-align: left;
}

.author-link {
  color: #0099cc;
  text-decoration: none;
  font-weight: 500;
}

.author-link:hover {
  text-decoration: underline;
}

.author-name {
  color: #333;
  font-weight: 500;
}

a {
  text-decoration: none;
}
</style>
