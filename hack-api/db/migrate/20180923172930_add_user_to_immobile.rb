class AddUserToImmobile < ActiveRecord::Migration[5.1]
  def change
    add_reference :immobiles, :user, foreign_key: true
  end
end
