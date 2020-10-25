WIDTH=450
HEIGHT=450
cp ./originals/*.JPG ./originals/resized/
find ./ -iwholename './originals/resized/*.JPG' -exec convert \{} -verbose -resize $WIDTHx$HEIGHT\> \{} \;