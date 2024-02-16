class AddCoverToBook < ActiveRecord::Migration[7.1]
  def change
    add_column :books, :cover, :string
  end
end
