**** video ****
https://www.youtube.com/watch?v=d_L_AZyocWA

**** setup ****

RUN "curl -s "https://get.sdkman.io" | bash" to install sdkman
RUN "source "$HOME/.sdkman/bin/sdkman-init.sh"
RUN "brew install buildpacks/tap/pack"
RUN ". $(pack completion)"

**** developer guide ****
ref: https://itnext.io/dockerfile-less-and-daemon-less-build-faa0513e320f

# default options
RUN "pack build test-java --builder paketobuildpacks/builder-jammy-full"

# full options
RUN "pack build test-java \
	--env 'BP_JVM_VERSION=17' \
	--env 'BP_MAVEN_BUILD_ARGUMENTS=clean package install -U' \
	--env 'BP_NODE_VERSION=16.20.0' \
	--env 'BP_JAVA_INSTALL_NODE=true' \
	--env 'BP_NODE_PROJECT_PATH=src/main/frontend' \
	--builder paketobuildpacks/builder-jammy-full"
