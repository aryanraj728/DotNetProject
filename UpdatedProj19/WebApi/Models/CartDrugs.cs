
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace WebApi.Models
{
    public class CartMobiles
    {
        [Key]
        public int CartID { get; set; }

        [Required(AllowEmptyStrings = false, ErrorMessage = "MobileId is Required.")]
        [Display(Name = "Mobile Id: ")]
        public int MobileID { get; set; }
        [Required(AllowEmptyStrings = false, ErrorMessage = "UserId is Required.")]
        [Display(Name = "User Id: ")]
        public string UserEmail { get; set; }
        [Display(Name = "Mobile Quantity Required: ")]
        public int Quantity { get; set; }

        [Required(AllowEmptyStrings = false, ErrorMessage = "Amount is Required.")]
        public double Amount { get; set; }
        public DateTime DateAdded { get; set; }
    }
}
