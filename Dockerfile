FROM node:6.10.3

RUN echo "Asia/Shanghai" > /etc/timezone
RUN dpkg-reconfigure -f noninteractive tzdata

WORKDIR /webapp

EXPOSE 3000
CMD ["bash", "start.sh"]

