FROM node:6.10.3

WORKDIR /webapp

EXPOSE 3000
CMD ["bash", "start.sh"]

