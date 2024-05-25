# Welcome to Asrul's Assignment Repository 👋

This is the repo that I use for doing this assignment with all my heart content 😉, packed with : -
- CI/CD functionalities 🚀
- My authentic source code for your reference 👩‍💻

## Tools selection

* [![angular](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)](https://angular.io/)
* [![portainer](https://img.shields.io/badge/Portainer-13BEF9?style=for-the-badge&logo=portainer&logoColor=white)](https://www.portainer.io/)
* [![aws](https://img.shields.io/badge/AWS%20EC2-FF9900?style=for-the-badge&logo=amazonaws&logoColor=white)](https://aws.amazon.com/pm/ec2)
* [![docker](https://img.shields.io/badge/Docker-0db7ed?style=for-the-badge&logo=docker&logoColor=white)](https://www.docker.com/)
* [![traefik](https://img.shields.io/badge/Traefik-24a1c1?style=for-the-badge&logo=traefikproxy&logoColor=white)](https://traefik.io/)
* [![authelia](https://img.shields.io/badge/Authelia-000?style=for-the-badge&logo=authelia&logoColor=white)](https://www.authelia.com/)

## Notes
- Link for the assignment is here : https://tigasatutiga.com
- There are some tools you can access : -
 1. [Traefik](https://traefik.tigasatutiga.com) u: mulan, p:mulan
 2. [Portainer](https://portainer.tigasatutiga.com) u: admin, p:adminadminadmin
 3. [Authelia](https://auth.tigasatutiga.com) auth: upon request

- Authelia somehow I can't add new user through recompose another container, instead I disable it for all authentication. Thus, if you need to look at it (prove that image is running), you need navigate to https://auth.tigasatutiga.com or check the stacks at https://portainer.tigasatutiga.com. 

- This hosting will be valid for a month only, due to AWS limited Free Tier usage. It valid for 12 month but uptime is just for 700++ hours (1 month equivalent)

- Every tools here were spinned using docker.

- For the webserver, I'm using nginx, both front and back end of this project. front end is using traditional html method (Angular) and back end using proxy pass method (Node.js).