FROM node:22.14.0-alpine3.21

# Create user & group
RUN addgroup apple && adduser -S -G apple apple

WORKDIR /app

# Copy first (as root)
COPY package*.json ./

# Give permission to apple
RUN chown -R apple:apple /app

# Now switch to apple
USER apple

# Install deps
RUN npm install

# Copy rest of the code
COPY --chown=apple:apple . .

ENV API_URL=https://api.example.com
EXPOSE 3000
CMD ["npm", "start"]
