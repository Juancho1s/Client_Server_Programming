class Article < ApplicationRecord
    validates :title, presence: {message: "Attr is mandatory"}
    validates :body, presence: true, length: { in: 10..50 }
end