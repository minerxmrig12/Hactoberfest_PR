<script>

	/* JavaScript Function to print leaders in an array */
	function printLeaders(arr,size)
	{
		let max_from_right = arr[size-1];

		/* Rightmost element is always leader */
		document.write(max_from_right + " ");

		for (let i = size-2; i >= 0; i--)
		{
			if (max_from_right < arr[i])
			{	
				max_from_right = arr[i];
				document.write(max_from_right + " ");
			}
		}
	}

	/* Driver program to test above function*/

	let arr = [16, 17, 4, 3, 5, 2];
	let n = arr.length;
	printLeaders(arr, n);
	
</script>
