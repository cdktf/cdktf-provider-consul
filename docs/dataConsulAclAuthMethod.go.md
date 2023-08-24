# `data_consul_acl_auth_method`

Refer to the Terraform Registory for docs: [`data_consul_acl_auth_method`](https://registry.terraform.io/providers/hashicorp/consul/2.18.0/docs/data-sources/acl_auth_method).

# `dataConsulAclAuthMethod` Submodule <a name="`dataConsulAclAuthMethod` Submodule" id="@cdktf/provider-consul.dataConsulAclAuthMethod"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataConsulAclAuthMethod <a name="DataConsulAclAuthMethod" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/consul/2.18.0/docs/data-sources/acl_auth_method consul_acl_auth_method}.

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-consul-go/consul/dataconsulaclauthmethod"

dataconsulaclauthmethod.NewDataConsulAclAuthMethod(scope Construct, id *string, config DataConsulAclAuthMethodConfig) DataConsulAclAuthMethod
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethodConfig">DataConsulAclAuthMethodConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethodConfig">DataConsulAclAuthMethodConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.resetPartition">ResetPartition</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.resetId"></a>

```go
func ResetId()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.resetNamespace"></a>

```go
func ResetNamespace()
```

##### `ResetPartition` <a name="ResetPartition" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.resetPartition"></a>

```go
func ResetPartition()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-consul-go/consul/dataconsulaclauthmethod"

dataconsulaclauthmethod.DataConsulAclAuthMethod_IsConstruct(x interface{}) *bool
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-consul-go/consul/dataconsulaclauthmethod"

dataconsulaclauthmethod.DataConsulAclAuthMethod_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-consul-go/consul/dataconsulaclauthmethod"

dataconsulaclauthmethod.DataConsulAclAuthMethod_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.property.config">Config</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.property.configJson">ConfigJson</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.property.maxTokenTtl">MaxTokenTtl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.property.namespaceRule">NamespaceRule</a></code> | <code><a href="#@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethodNamespaceRuleList">DataConsulAclAuthMethodNamespaceRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.property.tokenLocality">TokenLocality</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.property.partitionInput">PartitionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.property.partition">Partition</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.property.config"></a>

```go
func Config() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `ConfigJson`<sup>Required</sup> <a name="ConfigJson" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.property.configJson"></a>

```go
func ConfigJson() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `MaxTokenTtl`<sup>Required</sup> <a name="MaxTokenTtl" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.property.maxTokenTtl"></a>

```go
func MaxTokenTtl() *string
```

- *Type:* *string

---

##### `NamespaceRule`<sup>Required</sup> <a name="NamespaceRule" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.property.namespaceRule"></a>

```go
func NamespaceRule() DataConsulAclAuthMethodNamespaceRuleList
```

- *Type:* <a href="#@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethodNamespaceRuleList">DataConsulAclAuthMethodNamespaceRuleList</a>

---

##### `TokenLocality`<sup>Required</sup> <a name="TokenLocality" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.property.tokenLocality"></a>

```go
func TokenLocality() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `PartitionInput`<sup>Optional</sup> <a name="PartitionInput" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.property.partitionInput"></a>

```go
func PartitionInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `Partition`<sup>Required</sup> <a name="Partition" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.property.partition"></a>

```go
func Partition() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataConsulAclAuthMethodConfig <a name="DataConsulAclAuthMethodConfig" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethodConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethodConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-consul-go/consul/dataconsulaclauthmethod"

&dataconsulaclauthmethod.DataConsulAclAuthMethodConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Id: *string,
	Namespace: *string,
	Partition: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethodConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethodConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethodConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethodConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethodConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethodConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethodConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethodConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.18.0/docs/data-sources/acl_auth_method#name DataConsulAclAuthMethod#name}. |
| <code><a href="#@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethodConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.18.0/docs/data-sources/acl_auth_method#id DataConsulAclAuthMethod#id}. |
| <code><a href="#@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethodConfig.property.namespace">Namespace</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.18.0/docs/data-sources/acl_auth_method#namespace DataConsulAclAuthMethod#namespace}. |
| <code><a href="#@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethodConfig.property.partition">Partition</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.18.0/docs/data-sources/acl_auth_method#partition DataConsulAclAuthMethod#partition}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethodConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethodConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethodConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethodConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethodConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethodConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethodConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethodConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.18.0/docs/data-sources/acl_auth_method#name DataConsulAclAuthMethod#name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethodConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.18.0/docs/data-sources/acl_auth_method#id DataConsulAclAuthMethod#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethodConfig.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.18.0/docs/data-sources/acl_auth_method#namespace DataConsulAclAuthMethod#namespace}.

---

##### `Partition`<sup>Optional</sup> <a name="Partition" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethodConfig.property.partition"></a>

```go
Partition *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.18.0/docs/data-sources/acl_auth_method#partition DataConsulAclAuthMethod#partition}.

---

### DataConsulAclAuthMethodNamespaceRule <a name="DataConsulAclAuthMethodNamespaceRule" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethodNamespaceRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethodNamespaceRule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-consul-go/consul/dataconsulaclauthmethod"

&dataconsulaclauthmethod.DataConsulAclAuthMethodNamespaceRule {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataConsulAclAuthMethodNamespaceRuleList <a name="DataConsulAclAuthMethodNamespaceRuleList" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethodNamespaceRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethodNamespaceRuleList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-consul-go/consul/dataconsulaclauthmethod"

dataconsulaclauthmethod.NewDataConsulAclAuthMethodNamespaceRuleList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataConsulAclAuthMethodNamespaceRuleList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethodNamespaceRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethodNamespaceRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethodNamespaceRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethodNamespaceRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethodNamespaceRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethodNamespaceRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethodNamespaceRuleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethodNamespaceRuleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethodNamespaceRuleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethodNamespaceRuleList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethodNamespaceRuleList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethodNamespaceRuleList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethodNamespaceRuleList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethodNamespaceRuleList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethodNamespaceRuleList.get"></a>

```go
func Get(index *f64) DataConsulAclAuthMethodNamespaceRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethodNamespaceRuleList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethodNamespaceRuleList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethodNamespaceRuleList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethodNamespaceRuleList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethodNamespaceRuleList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataConsulAclAuthMethodNamespaceRuleOutputReference <a name="DataConsulAclAuthMethodNamespaceRuleOutputReference" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethodNamespaceRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethodNamespaceRuleOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-consul-go/consul/dataconsulaclauthmethod"

dataconsulaclauthmethod.NewDataConsulAclAuthMethodNamespaceRuleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataConsulAclAuthMethodNamespaceRuleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethodNamespaceRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethodNamespaceRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethodNamespaceRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethodNamespaceRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethodNamespaceRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethodNamespaceRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethodNamespaceRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethodNamespaceRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethodNamespaceRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethodNamespaceRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethodNamespaceRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethodNamespaceRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethodNamespaceRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethodNamespaceRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethodNamespaceRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethodNamespaceRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethodNamespaceRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethodNamespaceRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethodNamespaceRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethodNamespaceRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethodNamespaceRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethodNamespaceRuleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethodNamespaceRuleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethodNamespaceRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethodNamespaceRuleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethodNamespaceRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethodNamespaceRuleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethodNamespaceRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethodNamespaceRuleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethodNamespaceRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethodNamespaceRuleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethodNamespaceRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethodNamespaceRuleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethodNamespaceRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethodNamespaceRuleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethodNamespaceRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethodNamespaceRuleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethodNamespaceRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethodNamespaceRuleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethodNamespaceRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethodNamespaceRuleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethodNamespaceRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethodNamespaceRuleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethodNamespaceRuleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethodNamespaceRuleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethodNamespaceRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethodNamespaceRuleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethodNamespaceRuleOutputReference.property.bindNamespace">BindNamespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethodNamespaceRuleOutputReference.property.selector">Selector</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethodNamespaceRuleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethodNamespaceRule">DataConsulAclAuthMethodNamespaceRule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethodNamespaceRuleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethodNamespaceRuleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BindNamespace`<sup>Required</sup> <a name="BindNamespace" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethodNamespaceRuleOutputReference.property.bindNamespace"></a>

```go
func BindNamespace() *string
```

- *Type:* *string

---

##### `Selector`<sup>Required</sup> <a name="Selector" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethodNamespaceRuleOutputReference.property.selector"></a>

```go
func Selector() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethodNamespaceRuleOutputReference.property.internalValue"></a>

```go
func InternalValue() DataConsulAclAuthMethodNamespaceRule
```

- *Type:* <a href="#@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethodNamespaceRule">DataConsulAclAuthMethodNamespaceRule</a>

---



