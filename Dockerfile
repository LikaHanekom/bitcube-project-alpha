FROM nginx:alpine

# Copy everything inside your local 'src' folder into the default Nginx public directory
COPY ./src/ /usr/share/nginx/html/

# Expose port 80 to the outside world
EXPOSE 80