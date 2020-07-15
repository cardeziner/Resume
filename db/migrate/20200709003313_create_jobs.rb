class CreateJobs < ActiveRecord::Migration[5.2]
  def change
    create_table :jobs do |t|
      t.string :title, null: false
      t.string :location, null: false
      t.date :start_date, null: false
      t.date :end_date, null: false
      t.string :duties, array: true, default: []
      
      t.timestamps null: false
    end
  end
end
