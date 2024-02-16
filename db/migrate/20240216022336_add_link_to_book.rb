class AddLinkToBook < ActiveRecord::Migration[7.1]
  def change
    add_column :books, :link, :string
  end
end
