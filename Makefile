all: tsconfig.json $(wildcard src/*.ts)
	tsc
