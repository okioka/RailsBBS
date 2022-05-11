# frozen_string_literal: true

FactoryBot.define do
  factory :comment do
    Faker::Config.locale = :ja
    name { Faker::Name.name }
    comment { Faker::Lorem.sentence }
    post_date_time { Faker::Date.between(from: '2020-01-01T00:00:00.000Z', to: '2030-01-01T00:00:00.000Z') }
  end
end
