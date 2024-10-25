# Use the official MySQL image as a base
FROM mysql:latest

# Set the environment variables
ENV MYSQL_ROOT_PASSWORD=password
ENV MYSQL_DATABASE=mydb
ENV MYSQL_USER=myuser
ENV MYSQL_PASSWORD=mypassword

# Expose the MySQL port
EXPOSE 3306

# Run the MySQL command to start the database
CMD ["mysqld_safe"]