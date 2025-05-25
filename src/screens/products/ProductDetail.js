import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {useRoute, useNavigation} from '@react-navigation/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import StarRating from '../../components/ratings/Starratings';

export default function ProductDetail() {
  const route = useRoute();
  const navigation = useNavigation();
  const {product} = route.params;

  const [seeMore, setSeeMore] = useState(false);
  const [showAddReview, setShowAddReview] = useState(false);

  const toggleSeeMore = () => setSeeMore(prev => !prev);

  const shortDescription = product.description.repeat(5);
  const fullDescription = product.description.repeat(30);

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.imageContainer}>
          <Image source={{uri: product.image}} style={styles.image} />
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.backButton}>
            <Ionicons name="arrow-back" size={24} color="#fff" />
          </TouchableOpacity>
        </View>

        <View style={styles.detailsContainer}>
          <Text style={styles.name}>{product.name}</Text>
          <Text style={styles.price}>{product.price}</Text>

          <StarRating rating={3.5} />

          <Text style={styles.description}>
            {seeMore ? fullDescription : shortDescription}
          </Text>

          <TouchableOpacity onPress={toggleSeeMore}>
            <Text style={styles.seeMoreText}>
              {seeMore ? 'See Less ▲' : 'See More ▼'}
            </Text>
          </TouchableOpacity>

          <View style={styles.reviewSection}>
            <Text style={styles.reviewTitle}>Reviews</Text>

            {/* Add Review Button */}
            {!showAddReview && (
              <TouchableOpacity
                onPress={() => setShowAddReview(true)}
                style={styles.pencilIconButton}>
                <Feather name="edit" size={24} color="#333" />
              </TouchableOpacity>
            )}

            {showAddReview && (
              <View style={styles.inputGroup}>
                <View style={styles.reviewHeader}>
                  <TouchableOpacity
                    style={{alignSelf: 'flex-end'}}
                    onPress={() => setShowAddReview(false)}>
                    <Ionicons name="close-circle" size={24} color="#999" />
                  </TouchableOpacity>
                </View>

                <Text style={styles.label}>Name</Text>
                <View style={styles.inputBox}>
                  <Text style={styles.inputPlaceholder}>Your name</Text>
                </View>

                <Text style={styles.label}>Review</Text>
                <View style={styles.inputBox}>
                  <Text style={styles.inputPlaceholder}>
                    Write your review...
                  </Text>
                </View>

                <TouchableOpacity style={styles.submitButton}>
                  <Text style={styles.submitText}>Submit Review</Text>
                </TouchableOpacity>
              </View>
            )}

            {/* Review List */}
            {[
              {name: 'Alice', text: 'Great product! Highly recommended.'},
              {name: 'Bob', text: 'Satisfied with the quality.'},
              {name: 'Charlie', text: 'Could be better, but still worth it.'},
            ].map((review, index) => (
              <View key={index} style={styles.reviewCard}>
                <Text style={styles.reviewName}>{review.name}</Text>
                <Text style={styles.reviewText}>{review.text}</Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>

      <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContent: {
    paddingBottom: hp(12),
  },
  imageContainer: {
    position: 'relative',
  },
  image: {
    width: wp('100%'),
    height: hp('45%'),
    resizeMode: 'cover',
    borderBottomLeftRadius: wp(5),
    borderBottomRightRadius: wp(5),
  },
  backButton: {
    position: 'absolute',
    top: hp(6),
    left: wp(4),
    backgroundColor: 'rgba(0,0,0,0.6)',
    padding: wp(2),
    borderRadius: wp(5),
  },
  detailsContainer: {
    padding: wp(5),
  },
  name: {
    fontSize: wp(6.5),
    fontWeight: 'bold',
    color: '#222',
    marginBottom: hp(1),
  },
  price: {
    fontSize: wp(5.5),
    color: '#4CAF50',
    fontWeight: 'bold',
    marginBottom: hp(0.5),
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: hp(1.5),
  },
  ratingText: {
    marginLeft: wp(2),
    fontSize: wp(4),
    color: '#666',
  },
  description: {
    fontSize: wp(4),
    color: '#666',
    lineHeight: hp(3),
  },
  seeMoreText: {
    fontSize: wp(4),
    color: '#007bff',
    marginTop: hp(1),
  },
  ratingSummary: {
    fontSize: wp(4),
    color: '#999',
    marginTop: hp(2),
  },
  bottomBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: wp(5),
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#eee',
    elevation: 10,
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: hp(1.6),
    borderRadius: wp(2),
    alignItems: 'center',
  },
  buttonText: {
    fontSize: wp(4.5),
    color: '#fff',
    fontWeight: 'bold',
  },
  reviewSection: {
    marginTop: hp(4),
    paddingHorizontal: wp(5),
    paddingBottom: hp(4),
  },
  reviewTitle: {
    fontSize: wp(5),
    fontWeight: 'bold',
    marginBottom: hp(1),
    color: '#222',
  },
  reviewCard: {
    backgroundColor: '#f9f9f9',
    borderRadius: wp(2),
    padding: wp(4),
    marginBottom: hp(1.5),
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    marginLeft: 6,
    fontSize: 14,
    color: '#444',
  },
  reviewName: {
    fontWeight: 'bold',
    fontSize: wp(4),
    marginBottom: hp(0.5),
  },
  reviewText: {
    fontSize: wp(3.8),
    color: '#444',
  },
  inputGroup: {
    marginTop: hp(2),
  },
  label: {
    fontSize: wp(4),
    marginBottom: hp(0.5),
    color: '#333',
  },
  inputBox: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: wp(2),
    paddingVertical: hp(1.2),
    paddingHorizontal: wp(3),
    marginBottom: hp(2),
  },
  inputPlaceholder: {
    color: '#999',
    fontSize: wp(3.8),
  },
  submitButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: hp(1.4),
    borderRadius: wp(2),
    alignItems: 'center',
  },
  submitText: {
    color: '#fff',
    fontSize: wp(4.2),
    fontWeight: 'bold',
  },
  addReviewToggleButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: hp(1.2),
    borderRadius: wp(2),
    alignItems: 'center',
    marginBottom: hp(2),
  },
  addReviewToggleText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: wp(4),
  },
  pencilIconButton: {
    alignSelf: 'flex-end',
    padding: 10,
  },
});
