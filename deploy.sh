#!/bin/bash

USER="yony-os"
PASS="1qaz2wsXyony"

find . -type f | grep -v "deploy.sh" | grep -v "^./.git" | while read file; do
  clean="${file#./}"
  echo "Uploading: $clean"
  curl -u "$USER:$PASS" -F "$clean=@$file" https://neocities.org/api/upload
  echo ""
done

echo "Done!"
