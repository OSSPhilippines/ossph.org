firebase use ossph-org && \
firebase deploy --only functions:ossphSSRHandler && \
firebase target:clear hosting prod && \
firebase target:apply hosting prod ossph-org && \
firebase deploy --only hosting:prod
