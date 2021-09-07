#!/usr/bin/env bash

source ./scripts/util.sh

create_stories_and_tests() {
  print_bold "\nCreating stories and tests..."

  while read path; do
    pattern='[A-Za-z]+\.tsx'
    [[ $path =~ $pattern ]] && export component_name=${BASH_REMATCH[0]::${#BASH_REMATCH[0]}-4}
    file_name=${path::${#path}-4}
    # echo $file_name
    # echo $component_name

    print_line "Creating file $file_name.stories.tsx"
    cat scripts/.template/Component/Component.stories.template | 
    awk '{gsub("VAR_COMPONENT_NAME", ENVIRON["component_name"], $0); print}' > $file_name.stories.tsx

    print_line "Creating file $file_name.test.tsx"
    cat scripts/.template/Component/Component.test.template | 
    awk '{gsub("VAR_COMPONENT_NAME", ENVIRON["component_name"], $0); print}' > $file_name.test.tsx
  done < files.txt


}

create_stories_and_tests
print_bold "\nStories and tests created. ヽ(^o^)ノ"
