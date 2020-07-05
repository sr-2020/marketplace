NAMESPACE := sr2020
IMAGE := $(or ${image},${image},marketplace)
GIT_TAG := $(shell git tag -l --points-at HEAD | cut -d "v" -f 2)
TAG := :$(or ${tag},${tag},$(or ${GIT_TAG},${GIT_TAG},latest))
PORT=7020

build:
	docker build -t ${NAMESPACE}/${IMAGE}${TAG} -t ${NAMESPACE}/${IMAGE}:latest .

push:
	docker push ${NAMESPACE}/${IMAGE}

run:
	docker run -d --name ${IMAGE} -p ${PORT}:8080 -it ${NAMESPACE}/${IMAGE}:latest

down:
	docker rm -f ${IMAGE}
