FROM ruby:3.1.3 as machine_build

RUN curl -sL https://deb.nodesource.com/setup_18.x | bash -\
  && apt-get update -qq && apt-get install -qq --no-install-recommends \
    nodejs \
    build-essential \
    libpq-dev \
  && apt-get upgrade -qq \
  && apt-get clean \
  && rm -rf /var/lib/apt/lists/*\
  && npm install -g yarn@1

WORKDIR /app

ADD Gemfile* /app
ADD package* /app
RUN bundle install
RUN yarn install

# CMD ["bundle", "exec", "rails", "server", "-b", "0.0.0.0"]
