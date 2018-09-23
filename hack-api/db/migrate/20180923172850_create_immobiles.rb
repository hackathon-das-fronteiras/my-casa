class CreateImmobiles < ActiveRecord::Migration[5.1]
  def change
    create_table :immobiles do |t|
      t.string :title
      t.string :avatar
      t.string :price
      t.integer :wich
      t.integer :animal
      t.text :description

      t.timestamps
    end
  end
end
