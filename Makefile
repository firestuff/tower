all: tsconfig.json $(wildcard ts/*.ts)
	tsc
