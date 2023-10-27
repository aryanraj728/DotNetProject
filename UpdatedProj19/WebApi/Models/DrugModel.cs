using System.ComponentModel.DataAnnotations;

namespace WebApi.Models
{
    public class MobileModel
    {
        [Key]
        public int MobileId { get; set; }

        [Required(AllowEmptyStrings = false, ErrorMessage = "Mobile Name is Required.")]
        [Display(Name = "Mobile Name: ")]
        public string MobileName { get; set; }

        [Required(AllowEmptyStrings = false, ErrorMessage = "Ram is Required.")]
        [Display(Name = "Ram: ")]
        public string Ram { get; set; }

        [Required(AllowEmptyStrings = false, ErrorMessage = "Storage")]
        [Display(Name = "Storage: ")]
        public string Storage { set; get; }

        [Required(AllowEmptyStrings = false, ErrorMessage = "Mobile Price is Required.")]
        [Display(Name = "Mobile Price: ")]
        public double MobilePrice { get; set; }

        [Required(AllowEmptyStrings = false, ErrorMessage = "Mobile Amount is Required.")]
        [Display(Name = "Mobile Quantity Available: ")]
        public int MobileQuantityAvailable { get; set; }
        public string SuccessMessage { get; set; }

    }
}
