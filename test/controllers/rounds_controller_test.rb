require 'test_helper'

class RoundsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get rounds_index_url
    assert_response :success
  end

  test "should get show" do
    get rounds_show_url
    assert_response :success
  end

  test "should get create" do
    get rounds_create_url
    assert_response :success
  end

  test "should get new" do
    get rounds_new_url
    assert_response :success
  end

  test "should get edit" do
    get rounds_edit_url
    assert_response :success
  end

  test "should get update" do
    get rounds_update_url
    assert_response :success
  end

  test "should get destroy" do
    get rounds_destroy_url
    assert_response :success
  end

end
