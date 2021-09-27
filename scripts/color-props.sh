#!/usr/bin/env bash

source ./scripts/util.sh

generate_color_props() {
  print_bold "\nGenerating default color props..."

  colors_file_path=./src/styles/DefaultColours.ts
  color_props_file_path=./src/styles/DefaultColourProps.ts

  rm $color_props_file_path || true
  touch $color_props_file_path

  cat $colors_file_path | \
  sed -E "s/([a-z]+)([0-9]+)/\1-\2/g" | \
  sed -E "s/( *)(:)(.*)/\,/g" | \
  sed -E "s/{/[/g" | \
  sed -E "s/}/]/g" | \
  sed "s/defaultColours/defaultColourProps/" \
  > $color_props_file_path
}

generate_color_props
print_bold "\nDefault color props generated. ヽ(^o^)ノ"
