import { ImageResponse } from 'next/og';
import { readFile } from 'fs/promises';
import { join } from 'path';

export const alt = 'Awesome Pinoy-Made';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

const DATA_URL = 'https://raw.githubusercontent.com/OSSPhilippines/awesome-pinoy-made/refs/heads/main/data.json';

// Positions for scattered project names
const namePositions = [
  // Left side
  { top: 50, left: 30, rotate: -12 },
  { top: 140, left: 60, rotate: 8 },
  { top: 240, left: 25, rotate: -5 },
  { top: 340, left: 70, rotate: 10 },
  { top: 440, left: 40, rotate: -8 },
  { top: 540, left: 55, rotate: 6 },
  // Right side
  { top: 50, left: 1000, rotate: 10 },
  { top: 140, left: 1020, rotate: -6 },
  { top: 240, left: 990, rotate: 12 },
  { top: 340, left: 1030, rotate: -10 },
  { top: 440, left: 1010, rotate: 5 },
  { top: 540, left: 980, rotate: -12 },
];

interface Project {
  name: string;
}

export default async function Image() {
  const [molotFont, robotoFont, projectsData] = await Promise.all([
    readFile(join(process.cwd(), 'public', 'fonts', 'Molot.otf')),
    readFile(join(process.cwd(), 'public', 'fonts', 'RobotoCondensed-Regular.ttf')),
    fetch(DATA_URL).then(res => res.json()).catch(() => ({ projects: [] })),
  ]);

  const projectNames = (projectsData.projects || [])
    .slice(0, namePositions.length)
    .map((p: Project) => p.name);

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'radial-gradient(circle at 50% 50%, #ffffff 0%, #e3f9ff 100%)',
          fontFamily: 'Roboto Condensed',
          position: 'relative',
          padding: 60,
        }}
      >
        {/* Scattered project names */}
        {projectNames.map((name: string, index: number) => (
          <span
            key={index}
            style={{
              position: 'absolute',
              top: namePositions[index].top,
              left: namePositions[index].left,
              transform: `rotate(${namePositions[index].rotate}deg)`,
              fontSize: 16,
              fontWeight: 700,
              color: 'rgba(0, 96, 160, 0.15)',
              whiteSpace: 'nowrap',
            }}
          >
            {name}
          </span>
        ))}

        <div style={{ fontSize: 80, marginBottom: 24 }}>
          ⭐
        </div>

        <h1
          style={{
            fontFamily: 'Molot',
            fontSize: 72,
            fontWeight: 400,
            background: 'linear-gradient(to right, #0060A0 0%, #7524B3 50%, #CF557D 100%)',
            backgroundClip: 'text',
            color: 'transparent',
            margin: 0,
            textAlign: 'center',
            lineHeight: 1.1,
          }}
        >
          Awesome Pinoy-Made
        </h1>

        <p
          style={{
            fontSize: 28,
            fontWeight: 400,
            color: '#64748b',
            margin: '24px 0 0 0',
            textAlign: 'center',
          }}
        >
          Curated list of amazing Filipino open source projects
        </p>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            marginTop: 32,
            fontSize: 22,
            color: '#64748b',
          }}
        >
          <span>🇵🇭 Made with pride in the Philippines</span>
        </div>

        <div
          style={{
            position: 'absolute',
            bottom: 40,
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <span style={{ fontSize: 18, fontWeight: 700, color: '#94a3b8' }}>
            ossph.org
          </span>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: 'Molot',
          data: molotFont,
          style: 'normal',
          weight: 400,
        },
        {
          name: 'Roboto Condensed',
          data: robotoFont,
          style: 'normal',
          weight: 400,
        },
      ],
    }
  );
}
