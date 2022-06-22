# Editing the site content

Each section of the website has its own .js file found in
```
src > components > sections
```
All the sites content can be edited from those files. 

If you want to add a section to the site, navigate to
```
src > views > Home.js
```
Remember to import the section you want to add at the top.
There is a pre-made 'GenericSection.js'. I haven't used it yet, but you can use that as a starting point for your own section as it contains all the proper linking to dependencies.

# Editing the site styles

The stylesheets can be found in
```
src > assets > scss
```
The 'core' folder contains all of the structural css for the site but doesn't contain any hard set values. The files in the core folder reference files in the 'settings' folder. So if you need to change color values, padding, etc, go to the settings folder.


