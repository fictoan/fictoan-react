# Utility functions for other scripts

print_line() {
  # shellcheck disable=SC2145
  printf "$@\n"
}

print_bold() {
  tput bold
  print_line "$@"
  tput sgr0
}

check_install() {
  bin_path=$(command -v $1)
  if [[ -z "$bin_path" ]]; then
    print_bold "'$1' not found. Install the right stuff and retry? ¯\_(ツ)_/¯"
    exit 1
  else
    print_line "'$1' found at $bin_path"
  fi
}

react_dep="react"
next_dep="next"
strapi_dep="strapi"

check_project_type() {
  print_bold "\nChecking project type..."
  project_type=""
  if grep -qF "\"$strapi_dep\"" ./package.json; then
    print_line "$strapi_dep project"
    project_type=$strapi_dep
  elif grep -qF "\"$next_dep\"" ./package.json; then
    print_line "$next_dep project"
    project_type=$next_dep
  elif grep -qF "\"$react_dep\"" ./package.json; then
    print_line "$react_dep project"
    project_type=$react_dep
  else
    print_bold "Project type not supported. ¯\_(ツ)_/¯"
    exit 1
  fi
}
