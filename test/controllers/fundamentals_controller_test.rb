require 'test_helper'

class FundamentalsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get fundamentals_index_url
    assert_response :success
  end

  test "should get create" do
    get fundamentals_create_url
    assert_response :success
  end

  test "should get new" do
    get fundamentals_new_url
    assert_response :success
  end

  test "should get edit" do
    get fundamentals_edit_url
    assert_response :success
  end

  test "should get show" do
    get fundamentals_show_url
    assert_response :success
  end

  test "should get update" do
    get fundamentals_update_url
    assert_response :success
  end

  test "should get destroy" do
    get fundamentals_destroy_url
    assert_response :success
  end

end
