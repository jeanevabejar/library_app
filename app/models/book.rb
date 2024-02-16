class Book < ApplicationRecord
    validates :title,  presence: true
    validates :author, presence: true
    validates :cover, presence: true, format: { with: URI::DEFAULT_PARSER.make_regexp }
end
