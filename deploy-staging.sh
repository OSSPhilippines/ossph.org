firebase use ossph-org && \
firebase deploy --only functions:ossphSSRHandler && \
firebase target:clear hosting staging && \
firebase target:apply hosting staging staging-ossph-org && \
firebase deploy --only hosting:staging
