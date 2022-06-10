class Game < ApplicationRecord
    validates :name, presence: true
    validates :year, numericality: true
    validates :genre, presence: true
end
end
