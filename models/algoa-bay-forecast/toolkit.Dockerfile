FROM ghcr.io/saeon/somisana_geopython:3.8.10

# BUILD TIME

ARG PG_HOST
ARG PG_PORT=5432
ARG PG_USERNAME=admin
ARG PG_PASSWORD=password
ARG MONGO_HOST=localhost:27017
ARG MONGO_USERNAME=admin
ARG MONGO_PASSWORD=password
ARG COPERNICUS_USERNAME
ARG COPERNICUS_PASSWORD

# RUNTIME

ENV PG_HOST=$PG_HOST
ENV PG_PORT=$PG_PORT
ENV PG_USERNAME=$PG_USERNAME
ENV PG_PASSWORD=$PG_PASSWORD
ENV MONGO_HOST=$MONGO_HOST
ENV MONGO_USERNAME=$MONGO_USERNAME
ENV MONGO_PASSWORD=$MONGO_PASSWORD
ENV COPERNICUS_USERNAME=$COPERNICUS_USERNAME
ENV COPERNICUS_PASSWORD=$COPERNICUS_PASSWORD

# Setup a non-root user (Python complains about this)
RUN groupadd -g 1999 runners \
  && adduser \
    -m \
    -u 1998 \
    -gid 1999 \
    --shell /bin/bash \
    --disabled-password \
    --gecos "" \
    somisana \
  && echo "somisana ALL=(ALL) NOPASSWD: ALL" > /etc/sudoers.d/somisana \
  && chmod 0440 /etc/sudoers.d/somisana

USER somisana
WORKDIR /home/somisana

# Setup pipenv environment
ENV PATH="/home/somisana/.local/bin:$PATH"
ENV PIPENV_VENV_IN_PROJECT="enabled"
ENV LANG="en_US.UTF-8"
RUN pip install --user pipenv

COPY --chown=somisana:somisana toolkit/ .

# Install "download-boundary-data"
WORKDIR /home/somisana/download-boundary-data
RUN rm -rf .venv && mkdir .venv
RUN pipenv sync

# Install "post-processing"
WORKDIR /home/somisana/post-processing
RUN rm -rf .venv && mkdir .venv
RUN pipenv sync

# Set the base working directory for all scripts
WORKDIR /home/somisana

# For testing
RUN echo $PATH

ENTRYPOINT [ "bin/exe" ]
CMD [ "$@" ]
