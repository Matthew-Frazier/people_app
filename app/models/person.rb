class Person < ApplicationRecord
  # Validations
  validates :first_name, :last_name, :age, :gender, :hair_color, :eye_color, presence: true 


  def full_name
    "#{self.first_name} #{self.last_name}"
  end

end

