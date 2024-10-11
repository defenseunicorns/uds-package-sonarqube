FROM cgr.dev/chainguard/busybox:latest

# renovate: datasource=github-tags depName=prometheus/jmx_exporter versioning=semver
ENV JMX_PROMETHEUS_PLUGIN_VERSION=1.0.1

USER root

ADD https://repo1.maven.org/maven2/io/prometheus/jmx/jmx_prometheus_javaagent/$JMX_PROMETHEUS_PLUGIN_VERSION/jmx_prometheus_javaagent-$JMX_PROMETHEUS_PLUGIN_VERSION.jar /

COPY ./curl.sh /bin/curl

RUN chmod -R 777 /*.jar

ENTRYPOINT [ "/bin/curl" ]
