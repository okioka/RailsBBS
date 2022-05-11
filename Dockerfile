FROM ruby:2.5.1

RUN mkdir /app
WORKDIR /app

RUN apt-get update && apt-get install -y nodejs --no-install-recommends && rm -rf /var/lib/apt/lists/*
RUN apt-get update && apt-get install -y mariadb-client --no-install-recommends && rm -rf /var/lib/apt/lists/*
RUN apt-get update -qq && apt-get install -y build-essential libpq-dev nodejs

ADD Gemfile /app/Gemfile
ADD Gemfile.lock /app/Gemfile.lock

ENV BUNDLER_VERSION 2.3.13
RUN gem install bundler
RUN bundle install

ADD . /app