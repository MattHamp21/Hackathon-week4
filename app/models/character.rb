class Character < ApplicationRecord
    validates :name, presence: true
    validates :age, numericality: true
    validates :game, presence: true
end
