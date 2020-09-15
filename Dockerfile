FROM node:12

# Install OS Dependency
RUN apt update && apt install libavahi-compat-libdnssd-dev -y

RUN npm install -g typescript rimraf 

# Add package file
COPY package.json ./

# Install deps
RUN npm i

# Copy source
COPY . .

# Build dist
RUN npm run build

# Expose port 3000
EXPOSE 3000

CMD tail -f /dev/null