WIDTH=450
HEIGHT=450
cp ./originals/*.jpg ./originals/resized/
find ./ -iwholename './originals/resized/*.jpg' -exec convert \{} -verbose -resize $WIDTHx$HEIGHT\> \{} \;