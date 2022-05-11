# frozen_string_literal: true

class CreateComments < ActiveRecord::Migration[5.2]
  def change
    create_table :comments do |t|
      t.string :name
      t.datetime :post_date_time
      t.string :comment

      t.timestamps
    end
  end
end
