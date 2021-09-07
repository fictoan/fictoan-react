#!/usr/bin/env bash

source ./scripts/util.sh

check_components_directory() {
  components_path="./"
  if [ $project_type == $next_dep ]; then
    components_path="./components"
  elif [ $project_type == $react_dep ]; then
    components_path="./src/components"
  fi

  if [ ${components_path} == "./" ]; then
    print_bold "This project doesn't support component creation. ¯\_(ツ)_/¯"
    exit 1
  fi
  if [ ! -d ${components_path} ]; then
    print_bold "'$components_path' path not found. Create the directory and retry? ¯\_(ツ)_/¯"
    exit 1
  fi

  print_line "\nComponents directory: $components_path"
}

check_component_name() {
  if [ -z $name ]; then
    print_bold "Component name not provided. Run the command with 'name=<component_name>'. ¯\_(ツ)_/¯"
    exit 1
  else
    print_line "Component name: $name"
  fi

  # Check if component name begins with capital letter
  if [[ ${name:0:1} =~ ^[A-Z]$ ]]; then
    print_line "Component name passes validation"
  else
    print_bold "Component name failed validation. Make sure component name begins with a capital letter. ¯\_(ツ)_/¯"
    exit 1
  fi
}

create_component() {
  print_bold "\nCreating component '$name'..."

  if [ -d $components_path/$name ]; then
    print_bold "'$components_path/$name' already exists. ¯\_(ツ)_/¯"
    exit 1
  fi

  mkdir $components_path/$name

  print_line "Creating file $components_path/$name/$name.tsx"
  cat scripts/.template/Component/Component.template | 
  awk '{gsub("VAR_COMPONENT_NAME", ENVIRON["name"], $0); print}' > $components_path/$name/$name.tsx

  print_line "Creating file $components_path/$name/$name.styled.tsx"
  cat scripts/.template/Component/Component.styled.template | 
  awk '{gsub("VAR_COMPONENT_NAME", ENVIRON["name"], $0); print}' > $components_path/$name/$name.styled.tsx

  print_line "Creating file $components_path/$name/$name.stories.tsx"
  cat scripts/.template/Component/Component.stories.template | 
  awk '{gsub("VAR_COMPONENT_NAME", ENVIRON["name"], $0); print}' > $components_path/$name/$name.stories.tsx

  print_line "Creating file $components_path/$name/$name.test.tsx"
  cat scripts/.template/Component/Component.test.template | 
  awk '{gsub("VAR_COMPONENT_NAME", ENVIRON["name"], $0); print}' > $components_path/$name/$name.test.tsx
}

check_project_type
check_components_directory
check_component_name
create_component
print_bold "\nComponent created. ヽ(^o^)ノ"
