class Weapon < ApplicationRecord
    validates :name, presence: true
    validates :type, presence: true
    validates :game, presence: true
end
end
