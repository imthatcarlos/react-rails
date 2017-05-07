source 'https://rubygems.org'

ruby "2.3.1"

gem "rails",                            "~> 5.0.0"
gem "pg",                               "0.18.4"
gem "sass-rails",                       "~> 5.0"
gem "bootstrap-sass",                   "~> 3.3"
gem "uglifier",                         ">= 1.3.0"
gem "coffee-rails",                     "~> 4.1.0"
gem "jquery-rails",                     "~> 4.1"
gem 'dotenv-rails',                                   :groups => [:development, :test]
gem "foreman",                          "0.78.0",     require: false
gem "puma",                             "3.4.0"
gem "redis",                            "3.3.0"
gem "sidekiq",                          "4.1.1"
gem "faraday"
gem "will_paginate"
gem "clockwork"
gem "twitter"
gem "aws-sdk",                          "~> 2.0.0"
gem "sentry-raven",                     "0.15.3",     require: false
gem "rspotify",                         "1.19.0"
gem "omniauth",                         "1.3.2"
gem "attr_encrypted",                   "~> 3.0.0"
gem "simple_form",                      "3.2.1"
gem "puma_worker_killer"
gem "omniauth-facebook",                "4.0.0"
gem "api-ai-ruby",                      "2.0.0"
gem "authlogic",                        "3.5.0"
gem "scrypt",                           "2.0.2"
gem "bcrypt",                           "3.1.10"
gem "skylight"
gem "sidekiq-skylight"
gem "facebook-messenger",   git: "https://cbeltran5@bitbucket.org/cbeltran5/facebook-messenger-newest.git", branch: "master"
gem "ticketevolution-ruby", require: "ticket_evolution"

gem "react-rails",                      "2.1.0"

group :development, :test do
  gem "byebug"
  gem "better_errors"
  gem "rename"
  gem "capistrano",                   require: false
  gem "capistrano-rvm",               require: false
  gem "capistrano-rails",             require: false
  gem "capistrano-bundler",           require: false
  gem "capistrano3-puma",             require: false
  gem "capistrano-rails-collection",  require: false
  gem "capistrano-rails-console",     require: false
  gem "capistrano-secrets-yml",       require: false
end

group :development do
  # Access an IRB console on exception pages or by using <%= console %> anywhere in the code.
  gem 'web-console', '>= 3.3.0'
  gem 'listen', '~> 3.0.5'
  # Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]
