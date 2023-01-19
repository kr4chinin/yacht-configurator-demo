# Yacht 3D web-configurator 🛥️

Demo configurator for *Kingdom Marine* yacht company to test basic functionality. This repository includes landing page and configurator logic itself. [Click here](http://yacht-configurator-demo.vercel.app/) to check it live, best perfomance and view for now are only achieved in Chrome on MacOS.

Note that only *Flybridge* model is currently avalaible for customization!

## Introduction

Here is the basic overview of the configurator:

![Basic functionality overview](https://user-images.githubusercontent.com/103210607/213533323-30cd7efb-9d1a-4485-91fe-763ef221cf50.gif)

And here you can one section from *Main Page* and one section from *About Us* page:
<img width="600" alt="Main page layout" src="https://user-images.githubusercontent.com/103210607/213533698-8d644ba9-90ca-458d-b28c-01b98d233cdd.png">
<img width="600" alt="About us section layout" src="https://user-images.githubusercontent.com/103210607/213533707-3fdc4855-430c-45e6-8581-9b16dafe5569.png">

I've also implemented adaptive layout for mobile devices (configurator perfomance is good on mid-tier and high-tier phones):

<img width="250" alt="Main page section on mobile" src="https://user-images.githubusercontent.com/103210607/213535091-3f6ee332-d43f-42fe-8c8b-d603a7b807eb.PNG">
<img width="250" alt="Configurator on mobile" src="https://user-images.githubusercontent.com/103210607/213535120-1774f426-3a00-42a3-a843-6d5ed88215ae.PNG">

### Functionality

* Ability to **customize** yacht exterior and interior details, choose different engines and various optional accessories

<img width="400" alt="Engine options in configurator" src="https://user-images.githubusercontent.com/103210607/213535913-150c6495-c741-4a9a-aa06-fd247427af6f.png">

* User can click on *Summary* section and check **final price** with all selected options in nice overview:

<img width="400" alt="Summary page" src="https://user-images.githubusercontent.com/103210607/213536362-32da501d-1fb8-41bf-9a8a-28f609d0f77a.png">

* Dynamic *water* and surroundings
* *Fullscreen* mode
* Adaptive layout for most popular devices, **perfomance** optimization
* **Interactive** landing with main information

### Tech stack

* Vite, React, Typescript
* MobX
* Three, react-three-fiber
* Sass

### Further plans

* Save/restore configuration from *localStorage*
* Cross-browser optimization
* Refactor landing styles

<img width="600" alt="Flybridge engine section" src="https://user-images.githubusercontent.com/103210607/213537484-7f4d034d-96c9-41e9-adfc-a9926d6fa760.png">

<img width="600" alt="Optional accessories pop-up in configurator" src="https://user-images.githubusercontent.com/103210607/213537952-dfaebe88-d062-4725-80ad-976fd8564729.png">


