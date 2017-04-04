# Angular-Lightgallery directive

Dynamically loaded lightGallery directive

Requirements
---
You must have [lightGallery](http://sachinchoolur.github.io/lightGallery/) installed.

If you want to display thumbnails, then you must install the [lightGallery Thumbnail](https://github.com/sachinchoolur/lg-thumbnail) plugin also.

Please refer to lightGallery docs for further help

Example usage for this directive:
---

``` html
<photo-gallery images="vm.images"></photo-gallery>
```

In your controller, ensure that you populate ```vm.images``` with your image (and thumbnail) sources.