####################################################################
#
# Description: Optimizes a .glb file.
#
# Note: Takes one argument, the name .glb file to optimize.
#
# Usage:
#   ./optimize.sh <file.glb>
#
####################################################################

#!/bin/bash

file_names=$*

for file_name in $file_names
do
    echo "Optimizing $file_name"

    echo "Breaking up $file_name"
    gltf-pipeline -i $file_name -o tmp/tmp.gltf --separate --json
    
    jpgs=$(find tmp -name "*.jpg")
    pngs=$(find tmp -name "*.png")

    for jpg in $jpgs
    do
        echo "Optimizing $jpg"
        magick $jpg -strip -interlace Plane -gaussian-blur 0.05 -quality 85% $jpg
    done

    for png in $pngs
    do
        echo "Optimizing $png"
        new_png=$(echo $png | sed 's/\.png/\.jpg/')
        magick $png -strip -interlace Plane -gaussian-blur 0.05 -quality 85% $new_png
        rm $png
    done

    # Replace pngs with jpgs
    sed -i 's/png/jpg/' tmp/tmp.gltf

    echo "Combining $file_name"
    gltf-pipeline -i tmp/tmp.gltf -o $file_name --binary --draco.compressMeshes --draco.compressionLevel=10

    # Remove temporary files.
    rm -rf tmp

done