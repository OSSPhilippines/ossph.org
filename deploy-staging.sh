firebase use hippocrades-blockchain && \
firebase deploy --only functions:ossphSSRHandler && \
firebase target:clear hosting staging && \
firebase target:apply hosting staging hippocrades-dot-org && \
firebase deploy --only hosting:staging
