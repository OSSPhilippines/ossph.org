firebase use hippocrades-blockchain && \
firebase deploy --only functions:ossphSSRHandler && \
firebase target:clear hosting prod && \
firebase target:apply hosting prod hippocrades-web-main-org && \
firebase deploy --only hosting:prod
