class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :email
      t.string :username
      t.string :password_digest
      t.integer :age
      t.boolean :gender
      t.boolean :role, default: false
      t.string :avatar
      t.string :phone
      t.string :address

      t.timestamps
    end
  end
end
